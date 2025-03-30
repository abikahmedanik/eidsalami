function customAlert(title, message) {
    Swal.fire({
        title: title,
        text: message,
        confirmButtonText: "ঠিকাছে 🥰",
        customClass: {
            confirmButton: "btn-custom",
        },
        confirmButtonColor: "#e2136d",
    });
}