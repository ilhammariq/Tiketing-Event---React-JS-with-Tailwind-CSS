export default function CapitalFormat(name) {

    return name.replace(/\b(\w)/g, s => s.toUpperCase());

}
