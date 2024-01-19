<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class missingperson extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'name' => [
                'type'       => 'VARCHAR',
                'constraint' => '50',
            ],
            'mobile_no' => [
                'type'       => 'text',
                'constraint' => '10',
            ],

            'address' => [
                
                'type'       => 'VARCHAR',
                'constraint' => '50',
            ],

            'image' => [
                
                'type'       => ' BYTEA',
            ],

        ]);
    
            $this->forge->createtable('missingperson');
        }
    
        public function down()
        {
            $this->forge->droptable('missingperson');
        }
    }