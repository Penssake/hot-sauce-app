import Icon from "./Icon";

const Header = ({ text, icon }) => {
    return (
        <header className="hot-sauce-header">
            <Icon src={icon.src} alt={icon.alt} />
            <h1>{text}</h1>
        </header>
    )
}

export default Header;

// NOTES
// Deciding to pass data as props in order to only import once and to keep it at the top of the application for all components
// chose header element for semantic html/accessiblity
// choosing to style by component using modifier classed when necessary
// chose to leave alt image since image is decorative