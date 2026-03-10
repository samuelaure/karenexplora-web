import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    canonical,
    type = 'website',
    image = '/images/og-image.jpg', // Default OG image
    noindex = false
}) => {
    const location = useLocation();
    const siteUrl = 'https://karenexplora.com';
    const fullUrl = `${siteUrl}${location.pathname}`;
    const canonicalUrl = canonical || fullUrl;

    // Clean trailing slash for consistency
    const cleanCanonical = canonicalUrl.endsWith('/') ? canonicalUrl.slice(0, -1) : canonicalUrl;

    const fullTitle = title
        ? `${title} | Karen Explora`
        : 'Karen Explora | Si la naturaleza está bien, nosotros también';

    const defaultDescription = 'Exploramos lugares desconocidos para descubrir especies nuevas, culturas únicas y ecosistemas valiosos. Proteger lo que conocemos es nuestra misión.';

    return (
        <Helmet>
            {/* Standard metadata */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <link rel="canonical" href={cleanCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={cleanCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={`${siteUrl}${image}`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={cleanCanonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />
        </Helmet>
    );
};

export default SEO;
