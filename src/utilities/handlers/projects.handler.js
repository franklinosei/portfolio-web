import { setProjects } from "../../features/projects.slice";
import { BASE_URL } from "../config";
import axios from "axios"

export async function getAllProjects(props) {
    try {
        let response = await axios.get(
            `${BASE_URL}/projects`,
        );

        if (response) {
            props.dispatch(setProjects(response.data))

            return true
        }

    return false

    } catch (err) {
        console.log(err)

        return false
    }
}
