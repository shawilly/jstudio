import joicoLogo from "@public/joico-logo.png";
import bainDeTerreLogo from "@public/bain-de-terre-logo.png";
import Image from "next/image";

type ProductProps = {
  brand: string;
  description: string;
  website: string;
  logo: string;
};

const ProductInfo = ({ brand, description, website, logo }: ProductProps) => (
  <div className="">
    <div className="">
      <Image
        src={logo}
        alt={`${brand} Logo`}
        layout="responsive"
        width={200}
        height={100}
      />
    </div>
    <p>{description}</p>
    <p>
      Explore {brand} products{" "}
      <a href={website} target="_blank" rel="noopener noreferrer">
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
    logo={joicoLogo.src}
  />
);

const BainDeTerreInfo = () => (
  <ProductInfo
    brand="Bain de Terre"
    description="We use Bain de Terre shampoos and conditions that are based on naturally sourced ingredients. We also carry the full line of Bain de Terre products."
    website="https://www.baindeterre.ca/"
    logo={bainDeTerreLogo.src}
  />
);

export const Products = () => {
  return (
    <div id="products" className="mt-[200px]">
      <div className="container">
        <h1 className="text-4xl text-secondary mt-12 w-full">Products</h1>
        <JoicoInfo />
        <BainDeTerreInfo />
      </div>
    </div>
  );
};
