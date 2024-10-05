export const useFloatingButton = () :{
    handleOpenWhastapp: () => void;
} => {
    const handleOpenWhastapp = () => {
        window.open("https://wa.me/573246365743", "_blank");
    }
    return {
        handleOpenWhastapp
    };
}