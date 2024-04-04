import Image, { StaticImageData } from "next/image";
import joicoLogo from "@public/joico-logo.png";
import bainDeTerreLogo from "@public/bain-de-terre-logo.png";

type ProductProps = {
  brand: string;
  description: string;
  website: string;
  logo: StaticImageData; // Assuming logo is of type StaticImageData
};

const ProductInfo = ({ brand, description, website, logo }: ProductProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
    <div className="mb-4">
      <div className="bg-gray-100 rounded-lg p-4">
        <Image src={logo} alt={`${brand} Logo`} height={125} width={150} />
      </div>
    </div>
    <p className="text-center text-gray-800 mb-4">{description}</p>
    <p className="text-center text-gray-700">
      Explore {brand} products{" "}
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        here
      </a>
      .
    </p>
  </div>
);

const JoicoInfo = () => (
  <ProductInfo
    brand="Joico"
    description="Our stylists use Joico professional salon products like shampoos and hair colours for their high quality. We also have the complete line of Joico products available for purchase. Particularly with colored hair, it is important to use high quality, specialty shampoos and conditioners like those from Joico to avoid washing the color out."
    website="http://www.joico.com/joico-products/all/"
    logo={joicoLogo}
  />
);

const BainDeTerreInfo = () => (
  <ProductInfo
    brand="Bain de Terre"
    description="We use Bain de Terre shampoos and conditions that are based on naturally sourced ingredients. We also carry the full line of Bain de Terre products."
    website="https://www.baindeterre.ca/"
    logo={bainDeTerreLogo}
  />
);

export const Products = () => {
  return (
    <section id="products" className="flex justify-center w-full h-screen p-5">
      <div className="container">
        <h1 className="text-4xl text-secondary mt-12 w-full">Products</h1>
        <div className="flex flex-col space-y-6">
          <JoicoInfo />
          <BainDeTerreInfo />
        </div>
      </div>
    </section>
  );
};
