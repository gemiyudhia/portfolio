import React from "react";
import * as Form from "@radix-ui/react-form";
import { Button } from "../Utilities/Button";

export const ContactForm = () => {
  return (
    <Form.Root className="flex min-h-screen justify-center items-center flex-col">
      <Form.Field className="mb-7 w-full max-w-xs" name="email">
        <div className="flex justify-between items-center">
          <Form.Label className="font-bold">Email</Form.Label>
          <Form.Message className="text-[10px] opacity-55" match="valueMissing">
            Email tidak boleh kosong
          </Form.Message>
          <Form.Message className="text-[10px] opacity-55" match="typeMismatch">
            Harap masukan email yang sesuai
          </Form.Message>
        </div>
        <Form.Control className="mt-1" asChild>
          <input
            className="px-3 py-2 rounded-md bg-transparent outline-none ring-2 ring-gray-500 focus:ring-blue-500 transition duration-200 w-full placeholder:opacity-50"
            type="email"
            placeholder="Email Anda"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="mb-7 w-full max-w-xs" name="massege">
        <div>
          <Form.Label htmlFor="massege">Pesan</Form.Label>
        </div>
        <Form.Control asChild>
          <textarea
            className="text-white text-sm py-1 px-3 h-24 rounded-md bg-transparent outline-none ring-2 ring-gray-500 focus:ring-blue-500 transition duration-200 w-full placeholder:opacity-50 placeholder:text-gray-700 placeholder:text-lg"
            placeholder="Pesan Anda"
            name=""
            id="">
            
          </textarea>
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button variant="w-full max-w-xs text-center">Kirim</Button>
      </Form.Submit>
    </Form.Root>
  );
};
