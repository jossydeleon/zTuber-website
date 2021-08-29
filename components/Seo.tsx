import Head from 'next/head';

export interface SeoProps {
    title?: string
    description?: string
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Josymar De Leon"></meta>
            <meta property="og:title" content={`${title}`} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content="https://ztubermusicapp.netlify.app" />
            <meta property="og:type" content="website"></meta>
            <meta name="keywords" content="youtube,stream,android,download,music,mp3,josymar de leon"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/litera/bootstrap.min.css" />
            <link rel="icon" href="/logo.png" />
        </Head>
    );
}

Seo.defaultProps = {
    title: 'zTuber - Stream music from YouTube',
    description: 'Download and Stream music from YouTube',
}

export default Seo;