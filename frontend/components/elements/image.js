import { getStrapiMedia } from 'utils/media';
import PropTypes from 'prop-types';
import { mediaPropTypes } from 'utils/types';
import Image from 'next/image';

const ImageExport = ({ media, className }) => {
	const { url, alternativeText } = media;
	const fullUrl = getStrapiMedia(url);

	return (
		<Image
			src={fullUrl}
			alt={alternativeText || ''}
			className={className}
			width={media.width}
			height={media.height}
			layout="responsive"
		/>
		// <img src={fullUrl} alt={alternativeText || ''} className={className} />
	);
};

Image.propTypes = {
	media: mediaPropTypes.isRequired,
	className: PropTypes.string,
};

export default ImageExport;
