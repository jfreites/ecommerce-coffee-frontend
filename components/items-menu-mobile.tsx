import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Menu } from "lucide-react";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/cafe-molido" className="block">Café molido</Link>
                <Link href="/categories/cafe-grano" className="block">Café en grano</Link>
                <Link href="/categories/cafe-capsulas" className="block">Café capsulas</Link>
            </PopoverContent>
        </Popover>
    )
}
export default ItemsMenuMobile;


