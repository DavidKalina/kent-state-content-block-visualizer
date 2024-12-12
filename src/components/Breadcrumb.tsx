import { ChevronRight, HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItemProps {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  isLast?: boolean;
}

interface BreadcrumbsProps {
  items: Omit<BreadcrumbItemProps, "isLast">[];
  className?: string;
}

const BreadcrumbItem = ({ label, href, icon, isLast }: BreadcrumbItemProps) => {
  const content = (
    <div
      className={cn(
        "flex items-center gap-2",
        href && !isLast && "hover:text-blue-600 transition-colors",
        isLast ? "text-gray-500 font-medium" : "text-gray-600"
      )}
    >
      {icon && icon}
      {label}
    </div>
  );

  if (href && !isLast) {
    return (
      <a
        href={href}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
      >
        {content}
      </a>
    );
  }

  return content;
};

const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center gap-2">
        <li>
          <BreadcrumbItem label="Home" href="/" icon={<HomeIcon className="h-4 w-4" />} />
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <BreadcrumbItem {...item} isLast={index === items.length - 1} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
