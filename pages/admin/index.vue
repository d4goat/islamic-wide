<template>
    <div>
        <div class="flex flex-col">
            <UInput v-model="formData.name"  variant="outline" />
            <UInput v-model="formData.description"  variant="outline" />
            <UButton @click="submit" color="green">Submit</UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
const formData = ref({
})

const supabase = useSupabaseClient()

const submit = async () => {
    console.log(formData.value)
    if(!formData.value.name || !formData.value.description) return alert("All field are required")

    const { data, error } = await supabase.from('category').insert([{ name: formData.value.name, description: formData.value.description }]).select()

    if (error) {
    console.error('Error inserting data:', error.message);
    alert('Failed to insert data. Please try again.');
    return;
  }

  alert('Data submitted successfully!');
  console.log('Inserted data:', data);

  formData.value = {
    name: "",
    description: ""
  }
}
</script>