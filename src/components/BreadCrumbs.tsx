import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  items: {
    link: string;
    value: string;
  }[];
}

const BreadCrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((crumb, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink as={Link} to={crumb.link}>
            <Text fontSize={24}>{crumb.value}</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
