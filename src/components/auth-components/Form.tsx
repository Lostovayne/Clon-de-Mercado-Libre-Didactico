import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const Form = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        toast.success(`{
            Message:"Enviando...",
            Email: ${email}
        }`);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        setEmail("");
    };

    return (
        <div className="border rounded-lg mt-16 p-12">
            <form onSubmit={(event) => handleChange(event)}>
                <fieldset className="space-y-2">
                    <Label className="font-semibold text-gray-600 " htmlFor="email">
                        E‑mail, teléfono o usuario
                    </Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=""
                        className="xl:w-96 py-6 font-semibold text-gray-600 "
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </fieldset>

                <div className="mt-7 space-x-1.5">
                    <Button
                        variant={"default"}
                        type="submit"
                        className="p-6 font-semibold text-base bg-blue-600/90 hover:bg-blue-700 w-[120px]"
                    >
                        {isLoading ? <ImSpinner2 className="animate-spin" /> : "Continuar"}
                    </Button>
                    <Button
                        variant={"ghost"}
                        className="py-6 px-7 font-semibold text-base hover:bg-blue-100/20 text-blue-600/90 hover:text-blue-600 "
                    >
                        Crear Cuenta
                    </Button>
                </div>
            </form>
        </div>
    );
};
