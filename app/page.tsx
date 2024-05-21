"use client"

import { title, subtitle } from "@/components/primitives";
import { GithubIcon, IconGoogle } from "@/components/icons";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";




export default function Home() {
	const [option, setOption] = useState(0);
	const Login = () => {
		return (
			<Card className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
				<h1 className="text-2xl font-bold">Log In</h1>
				<form className="space-y-6">
					<div className="space-y-2">
						<Input
							className="w-full"
							id="email"
							label="Email Address"
							type="email"
						/>
					</div>
					<div className="space-y-2">
						<Input
							className="w-full"
							id="password"
							label="Password"
							type="password"
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
								id="remember-me"
								type="checkbox"
							/>
							<label className="ml-2 block text-sm" htmlFor="remember-me">
								Remember me
							</label>
						</div>
						<a className="text-sm text-blue-500 hover:underline" href="#">
							Forgot password?
						</a>
					</div>
					<Button className="w-full dark:bg-blue-600">Log In</Button>
				</form>
				<div className="my-6 flex items-center justify-center">
					<div className="h-px w-full bg-gray-600" />
					<span className="px-3 text-sm text-gray-400">OR</span>
					<div className="h-px w-full bg-gray-600" />
				</div>
				<div className="flex flex-col space-y-4">
					<Button
						color="primary"
						className="flex items-center justify-center space-x-2">
						<IconGoogle className="h-5 w-5 text-red-500" />
						<span>Continue with Google</span>
					</Button>
					<Button className="flex items-center justify-center space-x-2 bg-[#333] text-white hover:bg-[#444]">
						<GithubIcon className="h-5 w-5" />
						<span>Continue with Github</span>
					</Button>
				</div>
				<div className="mt-4 text-center">
					<span className="text-sm text-gray-400">Need to create an account?</span>
					<a className="ml-1 text-sm text-blue-500 hover:underline" href="#"
						onClick={() => setOption(1)}>
						Sign Up
					</a>
				</div>

			</Card>
		);
	}

	const Register = () => {
		return (
			<Card className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
				<h1 className="text-2xl font-bold">Sign Up</h1>
				<form className="space-y-6">
					<div className="space-y-2">
						<Input
							className="w-full"
							id="name"
							label="Name"
							type="text"
						/>
					</div>
					<div className="space-y-2">
						<Input
							className="w-full"
							id="lastname"
							label="Last Name"
							type="text"
						/>
					</div>
					<div className="space-y-2">
						<Input
							className="w-full"
							id="phone"
							label="Phone Number"
							type="number"
						/>
					</div>
					<div className="space-y-2">
						<Input
							className="w-full"
							id="email"
							label="Email Address"
							type="email"
						/>
					</div>
					<div className="space-y-2">
						<Input
							className="w-full"
							id="confirm-password"
							label="Confirm Password"
							type="password"
						/>
					</div>
					<Button className="w-full dark:bg-blue-600">Sign Up</Button>
				</form>
				<div className="my-6 flex items-center justify-center">
					<div className="h-px w-full bg-gray-600" />
					<span className="px-3 text-sm text-gray-400">OR</span>
					<div className="h-px w-full bg-gray-600" />
				</div>
				<div className="mt-4 text-center">
					<span className="text-sm text-gray-400">Already have an account?</span>
					<a className="ml-1 text-sm text-blue-500 hover:underline" href="#"
						onClick={() => setOption(0)}>
						Log In
					</a>
				</div>
			</Card>
		);
	}

	return (
		<section className="flex items-center justify-around gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Join&nbsp;</h1>
				<h1 className={title()}>our&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>exclusive&nbsp;</h1>
				<br />
				<h1 className={title()}>
					giveaways and win fantastic prizes
				</h1>
				<h2 className={subtitle({ class: "mt-6" })}>
					Don't miss out on the fun – enter now!
				</h2>
			</div>
			{
				option === 0 ? <Login /> : <Register />
			}
		</section>
	);
}
