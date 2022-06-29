export function exporter({ instance }: {
    instance: RoutifyBuildtime;
}): Promise<void[]>;
export function exportNode(rootNode: RNodeBuildtime, outputDir: string): Promise<void>;
export function exportInstance(rootNode: RNodeBuildtime, outputDir: string): Promise<void>;
export function exportSitemap(rootNode: any, outputDir: any): Promise<void>;
