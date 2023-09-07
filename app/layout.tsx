// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import Link from "next/link";
import "../styles.css";
import { Flex, Heading, Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { getOrganizations } from "../data/queries";

export const metadata = {
	title: "Gibba Gab",
	description: "Record label"
};

export default async function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const { organizations } = await getOrganizations();

	const { name, title, subtitle } = organizations?.[0];
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/assets/cat-icon.ico" sizes="any" />
			</head>
			<body>
				<Theme>
					<header>
						<Flex gap="5" align="end">
							<Link href="/">
								<Heading as="h1" size="4">
									{name}
								</Heading>
							</Link>
							<Link href="/artists">Artists</Link>
							<Link href="/releases">Releases</Link>
						</Flex>
					</header>

					<main>{children}</main>
					{/* <ThemePanel /> */}
				</Theme>
			</body>
		</html>
	);
}
