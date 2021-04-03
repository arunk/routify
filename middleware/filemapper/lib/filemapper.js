import { Node } from "../../../lib/node.js";
import { readdir } from 'fs/promises'
import { resolve } from "path";
import { File } from "./File.js";


/**
 * Maps filestructure to a node tree
 * @param {string} path 
 * @param {Node} parentNode 
 */
export const filemapper = async (path, parentNode) => {
    if (!parentNode)
        throw new Error('parentNode is missing')
    const filenames = await readdir(path)
    const promises = filenames.map(filename => {
        const filepath = resolve(path, filename)
        const file = new File(filepath)
        const node = new Node()
        node.file = file
        parentNode.appendChild(node)
        if (file.stat.isDirectory())
            return filemapper(file.path, node)
    })
    await Promise.all(promises)
    return parentNode
}