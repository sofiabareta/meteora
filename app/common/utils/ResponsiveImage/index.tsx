interface Props {
    imageObj: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
}

export default function ResponsiveImage ({ imageObj }: Props) {
    return (
        <picture>
            <source
                media="(max-width: 375px)"
                srcSet={imageObj.mobile}
                sizes="768px"
            />
            <source
                media="(max-width: 768px)"
                srcSet={imageObj.tablet}
                sizes="1440px"
            />
            <img src={imageObj.desktop} alt="teste" className="lg:w-full"/>
        </picture>
    );
}