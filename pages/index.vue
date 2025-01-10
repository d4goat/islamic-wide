<template>
    <div class="">
        <div class="flex justify-center mt-10">
            <div class="flex flex-col items-center gap-5">
                <span class="text-7xl font-bold">Islamic Wide</span>
                <Icon name="ci:add-plus-square" />
                <span class="font-medium text-2xl capitalize">dapatkan pengetahuan tentang informasi islami dengan islamic wide</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient()

const data = ref([])

onMounted(async () => {
    
let { data: category, error } = await supabase
  .from('category')
  .select('*')
          

    if(error) {
        console.error(error.response)
        return
    }
    data.value = category
})
</script>