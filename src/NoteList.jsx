const NoteList = ({ notes }) => {
    return (
        <>
            {notes.map((note) => (
                <div key={note.id}>
                    <h2>titulo de la nota: {note.title}</h2>
                    <h2>Descripcion de la nota: {note.descripcion}</h2>
                    <h2>Enabled: {note.enabled}</h2>
                </div>
            ))

            }
        </>
    )
}

export default NoteList

