import Carousel from "../ui-client/carousel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="container-bak">
          <img src={'/wwurm/img-1-thb.jpg'} alt="carousel image"  style={{width: "100%"}} />
          <div style={{position: "absolute", top: 0, left: 0, width: "100%" }}>
            <Carousel />
          </div>     
        </div>
        {children}
    </>
  )
}