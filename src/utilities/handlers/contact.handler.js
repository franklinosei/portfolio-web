import { setProjects } from "../../features/projects.slice";
import { BASE_URL, CONTACT_URL } from "../config";
import axios from "axios"

export async function sendEmail(props) {
    try {
        let response = await axios.post(
            `${CONTACT_URL}/email`,
            props.data
        );

        // if (response) {
        //     console.log(response)
        //     return response
        // }

    return response.status

    } catch (err) {
        console.log(err)

        return err.response.status
    }
}
