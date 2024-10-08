import Tag from "@/components/ui/Tag";
import Image from "next/image";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
// import { PostTypes } from "@/types/postTypes";
// import { formatDate } from "@/utils/formatDate";

interface searchParamsTypes {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPosts: boolean;
  tags: string;
  authorImage: string;
  authorName: string;
  publishDate: string;
}

const ID_Page = ({ searchParams }: { searchParams: searchParamsTypes }) => {
  const post = searchParams;
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[400px] relative mb-5">
        <Image
          fill
          alt="image for blog"
          src={post.image_path}
          className="object-cover"
        />
      </div>
      <Tag text={post.tags as string} />
      <h2 className="text-4xl font-extrabold uppercase text-tertiary my-3">
        {post.title}
      </h2>
      <div className="flex md:gap-20 gap-5 relative mt-10 md:flex-row flex-col">
        <aside
          className="md:sticky
        md:top-3/4 md:h-screen
        "
        >
          <span className="uppercase text-2xl font-extrabold text-tertiary">
            Share:
          </span>
          <div className="flex text-3xl gap-5 text-gray-400 mt-2 [&>*]:border">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
        </aside>

        <article>
          <p className="text-xl">
            {post.paragraph}
            {post.paragraph}
            {post.paragraph}
            {post.paragraph}
            {post.paragraph}
          </p>
          <div className="mt-5 flex gap-5 items-center">
            <Image
              width={500}
              height={500}
              alt="author image"
              className="w-20 h-20 rounded-full object-cover"
              src={post.authorImage}
            />

            <div className="flex gap-1 flex-col">
              <span>{post.authorName}</span>
              <span>{post.publishDate}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ID_Page;
