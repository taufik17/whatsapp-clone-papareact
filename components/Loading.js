import { Circle } from "better-react-spinkit";
import Image from "next/image";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Image
          src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg"
          alt="Loading"
          height={200}
          width={200}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
