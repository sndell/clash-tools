"use client";

import { Modal } from "@/components/ui/Modal";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { LoginForm } from "./LoginForm";

type Props = {
  close: () => void;
};

export const AuthModal = ({ close }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signup = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name: username,
      },
      {
        onRequest: (ctx) => {
          console.log(ctx);
        },
        onSuccess: (ctx) => {
          console.log(ctx);
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );
  };

  return (
    <Modal close={close} className="bg-primary border p-3 border-primary rounded-[20px]">
      <LoginForm />
      {/* <div className="p-3 bg-primary border border-primary rounded-[20px] flex flex-col gap-3">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div />
          <div>Login</div>
          <div className="flex justify-end">
            <button className="px-3 py-2 rounded-full border bg-background border-primary">
              <span className="icon-[clarity--window-close-line]" />
            </button>
          </div>
        </div>

        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 text-sm rounded-full border appearance-none bg-background border-primary"
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 text-sm rounded-full border appearance-none bg-background border-primary"
        />

        <input
          type="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-2 text-sm rounded-full border appearance-none bg-background border-primary"
        />

        <button onClick={signup} className="py-2 text-sm rounded-full border bg-accent border-accent">
          Login
        </button>
      </div> */}
    </Modal>
  );
};
