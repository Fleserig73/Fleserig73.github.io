const blobAnimation = () => {
    const blob = document.getElementById("blob");
    window.onpointermove = event => {
        const {
            clientX,
            clientY
        } = event;
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, {
            duration: 4400,
            fill: "forwards"
        });
    }
}
const app = () =>{
    blobAnimation();
}
app();
