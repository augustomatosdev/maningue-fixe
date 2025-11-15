"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Phone, Mail, Lock } from "lucide-react";
import { toast } from "sonner";

const LoginPage = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login form data:", formState);
    toast.success(
      "Servidor em manutenção. Por favor, tente novamente mais tarde."
    );
  };

  return (
    <main className="flex min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-pink-100">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 bg-pink-600/10 px-8 py-12">
              <Link href="/" className="inline-flex items-center gap-2 text-sm">
                <img src="/mf-logo.svg" alt="Belleza" className="h-10" />
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">
                Acesse sua conta
              </h1>
              <p className="text-base text-gray-600">
                Entre para acompanhar pedidos, resgatar benefícios e descobrir
                ofertas exclusivas.
              </p>
            </div>

            <div className="px-8 py-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-800">
                    E-mail
                  </label>
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formState.email}
                      onChange={(event) =>
                        handleChange("email", event.target.value)
                      }
                      className="pl-10"
                      required
                    />
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Telefone
                  </label>
                  <div className="relative">
                    <Input
                      type="tel"
                      placeholder="+244 923 000 000"
                      value={formState.phone}
                      onChange={(event) =>
                        handleChange("phone", event.target.value)
                      }
                      className="pl-10"
                    />
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Senha
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      value={formState.password}
                      onChange={(event) =>
                        handleChange("password", event.target.value)
                      }
                      className="pl-10 pr-10"
                      required
                    />
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Esconder senha" : "Mostrar senha"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <button
                      //   href="/recuperar-senha"
                      className="text-sm font-semibold text-pink-600 hover:underline"
                      onClick={() => {
                        toast.success(
                          "Servidor em manutenção. Por favor, tente novamente mais tarde."
                        );
                      }}
                    >
                      Esqueci minha senha
                    </button>
                  </div>
                </div>

                <Button className="w-full bg-pink-600 text-white hover:bg-pink-700">
                  Entrar
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Ainda não tem conta?{" "}
                  <button
                    // href="/cadastro"
                    className="font-semibold text-pink-600 hover:underline"
                    onClick={() => {
                      toast.success(
                        "Servidor em manutenção. Por favor, tente novamente mais tarde."
                      );
                    }}
                  >
                    Criar conta
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
