export interface ISiteMetadataLink {
	site: string;
	url: string;
}

export interface ISiteMetadata {
	site: {
		meta: {
			author: string;
			description: string;
			email: string;
			navLinks: string[];
			socials: ISiteMetadataLink[];
			title: string;
			url: string;
		};
	};
}
