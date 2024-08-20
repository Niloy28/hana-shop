import CreateProductFieldWrapper from "@/components/dashboard/products/create/CreateProductFieldWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { OrderStatus } from "@/types/order-data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const CreateProductPage = () => {
  return (
    <form>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          New Product
        </h1>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>Add new product details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <CreateProductFieldWrapper>
              <Label>Name</Label>
              <Input
                type="text"
                className="w-full"
                placeholder="Product Name"
              />
            </CreateProductFieldWrapper>
            <CreateProductFieldWrapper>
              <Label>Description</Label>
              <Textarea placeholder="Write product description here" />
            </CreateProductFieldWrapper>

            <CreateProductFieldWrapper>
              <Label>Price</Label>
              <span className="flex items-center gap-2">
                <p className="text-xl">$</p>
                <Input type="number" placeholder="Input price in USD" />
              </span>
            </CreateProductFieldWrapper>

            <CreateProductFieldWrapper>
              <div className="flex items-center gap-3">
                <Label>Featured Product</Label>
                <Switch />
              </div>
            </CreateProductFieldWrapper>

            <CreateProductFieldWrapper>
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Product Status" />
                </SelectTrigger>
                <SelectContent>
                  {OrderStatus.map((orderStatus) => (
                    <SelectItem key={orderStatus} value={orderStatus}>
                      {orderStatus}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CreateProductFieldWrapper>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default CreateProductPage;
