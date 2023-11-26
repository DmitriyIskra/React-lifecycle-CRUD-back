 const notes = {
    content: [ 
        {
            id: '1',
            content: "То, что было введено в поле ввода",
        },
        {
            id: '2',
            content: "То, что было введено в поле ввода То, что было введено в поле ввода То, что было введено в поле ввода То, что было введено в поле ввода То, что было введено в поле ввода",
        },
        {
            id: '3',
            content: "То, что было введено в  было введено в поле ввода То, что было введено в поле ввода",
        },
        {
            id: '4',
            content: "То, чт",
        }
    ],
    addNotes (note) {
        this.content.push(note)
    },
    deleteNotes (id) {
        const newNotes = this.content.filter( item => item.id !== id);
        this.content = newNotes;
    }
}

export default notes;



// module.exports = {
//     notes,
// }