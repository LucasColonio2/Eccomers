
export default function Button ({label, bg}){
    return (
        <button style={{ backgroundColor: bg}}
        className="pepito"
        onClick={() => alert ('click!')}
        >
            
            {label}
        </button>
    )
}


//por convenciion los componentes se escriben en la letra principal en Mayuscula