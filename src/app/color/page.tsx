import Link from "next/link";

const ColorPage = () => {
  return (
    <div className="bg-red-200 h-[100vh] flex flex-col items-center">
      <h1 className="text-2xl text-black font-bold">Color Page</h1>

      <p className="text-center text-black max-w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut minus
        ullam minima omnis veritatis modi magnam sit esse doloribus voluptates,
        vitae, dolor fugiat iste corrupti. Nihil nobis quam ex accusamus,
        blanditiis eum eius nisi quae vero cumque sed voluptatum.
      </p>
      <Link
        href={"/"}
        className="mt-6 underline text-black hover:text-blue-700"
      >
        {" "}
        Go back to Home{" "}
      </Link>
    </div>
  );
};

export default ColorPage;
