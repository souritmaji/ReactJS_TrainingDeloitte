function Assignment4() {
    let ImageArray = ['Image1.jpeg', 'Image2.jpeg', 'Image3.jpeg', 'Image4.jpeg', 'Image5.jpeg'];
    let DisplayImages = ImageArray.map(elm => <img  width="1000"   src={ "./Images/" + elm} />);
    return (
        <>
            <h1>Displaying Images from an Array</h1>
            <hr/>
            {DisplayImages}
        </>
    );
}

export default Assignment4;