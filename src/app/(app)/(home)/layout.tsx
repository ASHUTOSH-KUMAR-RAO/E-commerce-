import configPromise from "@payload-config";
import { getPayload } from "payload";
import type { CollectionSlug } from "payload";
import { Categorise } from "@/collections/Categorise";

import Footer from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: Categorise.slug as CollectionSlug,
    depth: 1, // Populate SubCatogries
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  interface Subcategory {
    [key: string]: any;
  }

  interface CategoryDoc {
    [key: string]: any;
    subcategories?: {
      docs?: Subcategory[];
      [key: string]: any;
    };
  }

  interface FormattedCategoryDoc extends CategoryDoc {
    subcategories: Subcategory[];
  }

  const formatedData: FormattedCategoryDoc[] = data.docs.map(
    (doc: CategoryDoc) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map(
        (doc: Subcategory) => ({
          ...doc,
        })
      ),
    })
  );
  console.log({
    data,
    formatedData,
  });
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <SearchFilters data={formatedData} />
      <div className="flex-1 bg-[#f4f4f4]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

// todo=> {children}, jaab bhi hum kuch render children props ke through krte hai ,to iss case mein hum usko pass nhi kaar sekte hai client portal per,isiliye ye server portal per hi rehta hai
