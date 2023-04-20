import axios from "axios";
import { setAllCategories, setBlogs, setFilteredBlogs } from "../../features/blogs.slice";
import { BASE_URL } from "../config";

export async function getAllBlogs(props) {
    try {
        let response = await axios.get(
            `${BASE_URL}/blogs`,
        );

        if (response.status === 200) {

            const data = response.data;
            const seriesCounts = {};

            data.forEach(item => {
                const series = item.blogSeries;
               
                if (series) {
                    if (!seriesCounts[series]) {
                        seriesCounts[series] = 0;
                    }
                    seriesCounts[series]++;
                }

                seriesCounts["All"] = response.data.length;
            });

            // console.log(seriesCounts)

            props.dispatch(setAllCategories(seriesCounts))

            props.dispatch(setFilteredBlogs(props.selectedCategory))

            props.dispatch(setBlogs(response.data))

            return true
        }

        return false

    } catch (err) {
        console.log(err)

        return false
    }
}


export async function getBlogById(props) {
    try {
        let response = await axios.get(
            `${BASE_URL}/blogs/${props.id}`,
        );

        if (response.status === 200) {
            const data = response.data;
            return data
        }

        return {}

    } catch (err) {
        console.log(err)
        // return err.response.data
    }
 }


export async function getBlogCategories(props) { }