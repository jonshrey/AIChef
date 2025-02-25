/* eslint-disable react/prop-types */
import ReactMarkDown from "react-markdown"
export default function ClaudeRecipe(props) {
    return (
        <section>
            <ReactMarkDown>{props.recipe}</ReactMarkDown>
            
        </section>
    )
}