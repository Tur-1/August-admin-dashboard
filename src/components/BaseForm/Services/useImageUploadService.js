import { ref } from "vue";

export default function useImageUploadService()
{
    let imagePreviewUrl = ref("");
    let showPreviewImage = ref(false);

    const openFullScreenImage = (image) =>
    {
        imagePreviewUrl.value = image;
        showPreviewImage.value = true;
    };
    const closeFullScreenImage = () =>
    {
        imagePreviewUrl.value = "";
        showPreviewImage.value = false;
    };
    return {
        showPreviewImage,
        imagePreviewUrl,
        closeFullScreenImage,
        openFullScreenImage
    }

}