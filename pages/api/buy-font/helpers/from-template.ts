import { promises as fs } from 'fs';

const fromTemplate = (filePath: string, variables: {name: string, value: string}[]) => new Promise<string>((resolve, reject) => {
  fs.readFile(filePath, 'utf8', )
  .then(content => {
    let filledContent = content;
    variables.forEach(variable => filledContent = filledContent.replace(`{${variable.name}}`, variable.value));
    resolve(filledContent);
  })
  .catch(error => reject(error))
});

export default fromTemplate;