//server/api/_sitemap-urls.ts
import axios from "axios";
import https from "https";
import qs from "qs";
import moment from "moment";
const domain = "https://asihairclinic.com";
const apiUrl = domain + "/graphql";

const convertToMomentFormat = (dateString: string) => {
    return moment(dateString, "DD/MM/YYYY HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");
};

const formatLastMod = (createdAt: string) => {
    let lastmod;
    if (moment(createdAt, "DD/MM/YYYY HH:mm:ss", true).isValid()) {
        lastmod = convertToMomentFormat(createdAt);
    } else {
        lastmod = moment().format("YYYY-MM-DD HH:mm:ss");
    }
    return lastmod;
};


const agent = new https.Agent({
    rejectUnauthorized: false
});

export default cachedEventHandler(
    async (e:any) => {
        const fetchBds =  "query{ blogss { slug createdAt }}";

        const { data } = await axios.post(apiUrl,
            qs.stringify({
                query: fetchBds
            }),{
                httpsAgent:agent
            } );
        let arrs:any[] = [];

        console.log('DATA-SITEMAP->',data)

        // const homepage = {
        //     loc: domain,
        //     lastmod: moment().format("YYYY-MM-DD HH:mm:ss"),
        //     changefreq: "weekly",
        //     priority: 1,
        // };

        // const products = data.data.products.map((item: any) => ({
        //     loc: `/san-pham/${item.slug}`,
        //     lastmod: formatLastMod(item.createdAt),
        //     changefreq: "daily",
        //     priority: 0.9,
        // }));

        const blogss = data.data.blogss.map((item: any) => ({
            loc: `/blogs/${item.slug}`,
            lastmod: formatLastMod(item.createdAt),
            changefreq: "daily",
            priority: 0.8,
        }));

        // const webContentss = data.data.webContentss.map((item: any) => ({
        //     loc: `/thong-tin/${item.slug}`,
        //     lastmod: formatLastMod(item.createdAt),
        //     changefreq: "daily",
        //     priority: 0.7,
        // }));

       
        // const veChungToi = {
        //     loc: `${domain}/ve-chung-toi`,
        //     lastmod: moment().format("YYYY-MM-DD HH:mm:ss"),
        //     changefreq: "daily",
        //     priority: 0.6,
        // }
        // const lienHe = {
        //     loc: `${domain}/lien-he`,
        //     lastmod: moment().format("YYYY-MM-DD HH:mm:ss"),
        //     changefreq: "daily",
        //     priority: 0.5,
        // }
       

        // arrs.push(homepage);
        // arrs.push(veChungToi);
        // arrs.push(lienHe);
       
        arrs = arrs.concat(blogss);
        // arrs = arrs.concat(newss);
        // arrs = arrs.concat(webContentss);



        return arrs;
    },
    {
        name: "sitemap-dynamic-url",
        maxAge: 60 * 10, // cache URLs for 10 minutes
    }
);
