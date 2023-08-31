import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import client from "../../sanity/client";
import { ImageLinkCard } from "../../components/ImageLinkCard";

async function getResources() {
	const releases = await client.fetch(
		`*[_type == "release"] { _id, name, artist->{ _id }, "imageUrl": image.asset->url }`
	);
	return {
		releases
	};
}

export default async function Releases() {
	const { releases } = await getResources();
	return (
		<Grid columns="3" gap="9">
			{releases.map(({ _id, imageUrl, name }) => {
				const releaseImageUrl = `${imageUrl}?w=500`;
				return (
					<ImageLinkCard
						id={_id}
						imageUrl={releaseImageUrl}
						name={name}
						url="#"
					/>
				);
			})}
		</Grid>
	);
}
