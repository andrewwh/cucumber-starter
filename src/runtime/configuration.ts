import { Browser } from './drivers';
import * as http from 'http';

const PORT = 3033;

export interface Configuration {
    browser: Browser;
    tags: string[];
    timeout: number;
    defaultUrl?: string;
}

class ConfigurationServiceImpl {
    private config?: Configuration;

    /**
     * Get the configuration locally if running as a single node, otherwise from the master node using http
     */
    async getConfiguration(): Promise<Configuration> {
        if (!this.config) {
            return new Promise((resolve, reject) => {
                http.get(`http://localhost:${PORT}`, (resp) => {
                    let data = '';

                    // A chunk of data has been received.
                    resp.on('data', (chunk) => {
                        data += chunk;
                    });

                    // The whole response has been received. Print out the result.
                    resp.on('end', () => {
                        const obj = JSON.parse(data);
                        this.config = obj;

                        resolve(obj);
                    });

                }).on("error", (err) => {
                    reject(err);
                });
            });
        }

        return this.config;
    }

    /**
     * 
     * @param config Set the configuration for this process
     */
    setConfiguration(config: Configuration): void {
        this.config = config;
    }

    /**
     * Server all request on port with configuration payload
     */
    serveConfiguration(): void {
        http.createServer((req, resp) => {
            resp.writeHead(200);
            resp.end(JSON.stringify(this.config));
        }).listen(PORT);
    }
}

/**
 * Application singleton for configuration
 */
export const ConfigurationService = new ConfigurationServiceImpl();