export default function Decoration(props: any) {
    return (
        <div style={{ color: 'red' }}>
            {props.children}
        </div>
    )
}
