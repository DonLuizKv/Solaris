export default function Video() {
    return (
        <section>
            <video width="320" height="240" controls preload="none">
                <source src="/" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}