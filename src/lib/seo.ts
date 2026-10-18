export function setPageMeta(title: string, description?: string) {
  document.title = title ? `${title} | Abhi Trivedi` : 'Abhi Trivedi — Full-Stack Engineer & Backend Specialist';
  
  if (description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }
}
