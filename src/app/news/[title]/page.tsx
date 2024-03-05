import Article from "@/components/detailPage/index/Detail";

interface Params {
  params: {
    title: string;
  };
}

export default function Detail({ params: { title } }: Params) {
  return <Article title={title} />;
}
