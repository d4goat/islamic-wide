<template>
    <main class="py-10">
        <div class="flex flex-1 justify-center items-center font-medium">
            <div class="px-16 py-8 max-w-screen-sm w-full border rounded-md shadow-md flex flex-col gap-4 items-center">
                <span class="text-4xl font-bold">Masuk Ke Islamic-Wide</span>
                <VForm :validation-schema="validationSchema" class="space-y-5">
                    <FloatLabel variant="in">
                        <InputText id="in_label" v-model="form.email" autocomplete="off" />
                        <label for="in_label">In Label</label>
                    </FloatLabel>
                    <Button label="Verify" />
                </VForm>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import * as Yup from "yup"
const client = useSupabaseClient()
const form = ref({
    email: "",
})
const errorMsg = ref(null)
const successMsd = ref(null)

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email tidak boleh kosong")
})

async function SignIn() {
    try {
        const { data, error } = await client.auth.signInWithOtp({
            email: form.value.email,
        })
        if(error) throw error
    } catch(err) {

    }
}
</script>