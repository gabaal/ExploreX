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
  return <div>{post.title}</div>;
};

export default ID_Page;
