import '../james.json'

export default function JamesBond(props){

    return (
    
		<>
		{props.jamesBond.map((movie, index) => (
				<li key={index}>
					{movie.Title}
				</li>
			))}

	
		</>
	
    )
}