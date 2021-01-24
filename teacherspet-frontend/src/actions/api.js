const API = 'http://localhost:3000';

const callHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

// STUDENT CALLS

export async function fetchStudents() {
    const resp = await fetch(`${API}/students`, {
    })
    return await resp.json()
}

export async function updateStudents(data) {
    const resp = await fetch(`${API}/students/${data.id}`, {
        method: 'PATCH',
        headers: callHeaders,
        body: JSON.stringify(data)
    })
    return await resp.json()
}