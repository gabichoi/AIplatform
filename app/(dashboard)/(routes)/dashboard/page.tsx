"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
	ArrowRight,
	Code,
	Image,
	MessageSquare,
	Music,
	Video,
} from "lucide-react";

const tools = [
	{
		label: "Conversation",
		icon: MessageSquare,
		color: "text-violet-500",
		bgColor: "bg-violet-500/10",
		href: "/conversation",
	},
	{
		label: "Image Generation",
		icon: Image,
		color: "text-pink-600",
		bgColor: "bg-pink-600/10",
		href: "/image",
	},
	{
		label: "Video Generation",
		icon: Video,
		color: "text-orange-600",
		bgColor: "bg-orange-600/10",
		href: "/video",
	},
	{
		label: "Music Generation",
		icon: Music,
		color: "text-yellow-500",
		bgColor: "bg-yellow-500/10",
		href: "/music",
	},
	{
		label: "Code Generation",
		icon: Code,
		color: "text-green-700",
		bgColor: "bg-green-700/10",
		href: "/code",
	},
];

const DashboardPage = () => {
	const router = useRouter();

	return (
		<div>
			<div className="mb-8 space-y-4">
				<h2 className="text-2xl md:text-4xl font-bold text-center">
					Explore the power of AI
				</h2>
				<p className="text-muted-foreground font-light text-sm md:text-lg text-center">
					Chat
				</p>
			</div>

			<div className="px-4 md:px-20 lg:px-32 space-y-4">
				{tools.map((tool) => (
					<Card
						onClick={() => router.push(tool.href)}
						key={tool.href}
						className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
					>
						<div className="flex items-center gap-x-4">
							<div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
								<tool.icon className={cn("w-8 h-8", tool.color)} />
							</div>
							<div className="font-semibold">{tool.label}</div>
						</div>
						<ArrowRight className="w-5 h-5" />
					</Card>
				))}
			</div>
		</div>
	);
};

export default DashboardPage;