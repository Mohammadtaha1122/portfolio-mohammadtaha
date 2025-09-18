import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center mt-40">
      <Image
        className="mx-auto"
        src={"/loading.svg"}
        alt="loading"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Loading;
